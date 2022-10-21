package springserver.movimentotests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import springserver.model.Conta;
import springserver.model.Movimento;
import springserver.model.User;
import springserver.model.enumerators.ContaTipo;
import springserver.model.enumerators.MovimentoTipo;
import springserver.repository.ContaRepository;
import springserver.repository.MovimentoRepository;

import java.math.BigDecimal;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
@ActiveProfiles("test")
public class MovimentoRepositoryTest {

    @Autowired
    TestEntityManager testEntityManager;

    @Autowired
    MovimentoRepository movimentoRepository;

    @Autowired
    ContaRepository contaRepository;

    @Test
    public void testFindByConta() {

        Movimento movimento = new Movimento();
        Conta conta = new Conta();
        User user = new User();

        user.setDisplayname("test-displayName");
        user.setUsername("test-username");
        user.setPassword("P4ssword");

        testEntityManager.persist(user);

        conta.setAgencia("1234");
        conta.setNumero("12345");
        conta.setTipoconta(ContaTipo.CC);
        conta.setUser(user);

        testEntityManager.persist(conta);

        movimento.setConta(conta);
        movimento.setValor(new BigDecimal(100L));
        movimento.setMovimentotipo(MovimentoTipo.DESPESA);
        movimento.setDescricao("Teste");

        testEntityManager.persist(movimento);
        testEntityManager.flush();

        Movimento movimentoDB = movimentoRepository.findByConta(conta);
        assertThat(movimentoDB).isNotNull();
    }

    @Test
    public void testFindByContaIdAndMovimentoTipo() {

        Movimento movimento = new Movimento();
        Conta conta = new Conta();
        User user = new User();

        user.setDisplayname("test-displayName");
        user.setUsername("test-username");
        user.setPassword("P4ssword");

        testEntityManager.persist(user);

        conta.setAgencia("1234");
        conta.setNumero("12345");
        conta.setUser(user);
        conta.setTipoconta(ContaTipo.CC);

        testEntityManager.persist(conta);

        movimento.setConta(conta);
        movimento.setValor(new BigDecimal(100L));
        movimento.setMovimentotipo(MovimentoTipo.DESPESA);
        movimento.setDescricao("Teste");

        testEntityManager.persist(movimento);
        testEntityManager.flush();

        Movimento movimentoDB = movimentoRepository.findByContaAndMovimentotipo(conta, MovimentoTipo.DESPESA);
        assertThat(movimentoDB).isNotNull();
    }


}
