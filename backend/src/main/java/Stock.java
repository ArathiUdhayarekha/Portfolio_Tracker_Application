import jakarta.persistence.*;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String ticker;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private double buyPrice;

    // Getters and setters omitted for brevity
}
