package equadra.model;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Id;


@Data
@Entity(name = "quadra")
public class Quadra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 4, max = 255, message = "O campo usuario não pode ser vazio, e deve ter tamanho deve ser entre {min} e {max}")
    private String nome_quadra;

    @NotNull
    @Size(min = 1, max = 1,message = "O campo Tipo de Esporte não pode ser vazio, O tamanho deve ser entre {min} e {max}")
    private String tipo_esporte;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
