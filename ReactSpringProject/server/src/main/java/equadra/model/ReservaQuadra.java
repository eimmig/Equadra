package equadra.model;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import javax.persistence.Id;


@Data
@Entity(name = "reserva_quadra")
public class ReservaQuadra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "quadra_id")
    private Quadra quadraId;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuarioId;

    @NotNull
    private LocalDateTime dataInicio;

    @NotNull
    private LocalDateTime dataFim;

    @Column(name = "cancelada")
    private boolean cancelada = false;

}
