package springserver.movimentotests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import springserver.model.Movimento;
import springserver.repository.MovimentoRepository;

import java.math.BigDecimal;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class MovimentoControllerTest {

    public static final String MOVIMENTO_URL = "/movimento";
    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    MovimentoRepository movimentoRepository;

    @Test
    public void testMovimentoController() {
        testRestTemplate.getForEntity(MOVIMENTO_URL, Movimento.class);
    }

}
