package springserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.bind.DefaultValue;
import springserver.model.enumerators.ContaTipo;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    @Size(min = 1, max = 255,  message = "Este campo é obrigatorio")
    private String numero;

    @NotNull
    @Size(min = 1, max = 255, message = "Este campo é obrigatorio")
    private String agencia;

    @NotNull
    @Size(min = 1, max = 255, message = "Este campo é obrigatorio")
    private String banco;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ContaTipo tipoconta;

    public Conta(String id) {
        this.id = Long.parseLong(id);
    }
}
