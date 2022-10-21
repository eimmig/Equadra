package springserver.model.DTO;

import springserver.model.Conta;

import java.math.BigDecimal;

public class MovimentoByContasDTO {

    private Conta conta;

    private BigDecimal valor;

    private BigDecimal valorpago;

    public MovimentoByContasDTO() {
    }

    public MovimentoByContasDTO(Conta conta, BigDecimal valor, BigDecimal valorpago) {
        this.conta = conta;
        this.valor = valor;
        this.valorpago = valorpago;
    }

    public Conta getConta() {
        return conta;
    }

    public void setConta(Conta conta) {
        this.conta = conta;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public BigDecimal getValorpago() {
        return valorpago;
    }

    public void setValorpago(BigDecimal valorpago) {
        this.valorpago = valorpago;
    }
}
