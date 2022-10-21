package springserver.model;

import lombok.Data;
import springserver.model.enumerators.MovimentoTipo;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
public class Movimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "conta_id")
    private Conta conta;

    @ManyToOne
    @JoinColumn(name = "conta_destino_id")
    private Conta contadestino;

    @NotNull(message = "O campo valor não pode ser nulo")
    private BigDecimal valor;

    private LocalDate datavencimento;

    private LocalDate datapagamento;

    private BigDecimal valorpago;

    private String categoria;

    private String descricao;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "O campo 'tipo' é obrigatório")
    private MovimentoTipo movimentotipo;

}
