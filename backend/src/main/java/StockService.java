import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stock) {
        Stock existingStock = stockRepository.findById(id).orElseThrow(() -> new RuntimeException("Stock not found"));
        existingStock.setName(stock.getName());
        existingStock.setTicker(stock.getTicker());
        existingStock.setQuantity(stock.getQuantity());
        existingStock.setBuyPrice(stock.getBuyPrice());
        return stockRepository.save(existingStock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public List<Stock> getStocks() {
        return stockRepository.findAll();
    }

    @Value("${api.stock-price.base-url}")
    private String baseUrl;

    @Value("${api.stock-price.api-key}")
    private String apiKey;

  
    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        double totalValue = 0;
        RestTemplate restTemplate = new RestTemplate();

        for (Stock stock : stocks) {
            String apiUrl = "https://www.alphavantage.co/query + stock.getTicker();"
         try {
            Map<String, Object> response = restTemplate.getForObject(apiUrl, Map.class);
            if (response != null && response.get("Global Quote") != null) {
                Map<String, String> quote = (Map<String, String>) response.get("Global Quote");
                double currentPrice = Double.parseDouble(quote.get("05. price"));
                totalValue += currentPrice * stock.getQuantity();
            }
        } catch (Exception e) {
            throw new RuntimeException("Error fetching stock price for " + stock.getTicker(), e);
        }
        }

        return totalValue;
    }
}