package springserver.model;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@Entity(name = "reserva_quadra")
public class ReservaQuadra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "id")
    private Quadra quadraId;

    @ManyToOne
    @JoinColumn(name = "id")
    private User usuarioId;

    @NotNull
    private LocalDateTime dataInicio;

    @NotNull
    private LocalDateTime dataFim;

    @Column(name = "cancelada")
    private boolean cancelada = false;

}
