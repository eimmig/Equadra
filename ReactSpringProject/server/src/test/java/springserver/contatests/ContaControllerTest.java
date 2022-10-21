package springserver.contatests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import springserver.repository.ContaRepository;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class ContaControllerTest {

    public static final String URL_CONTA = "/conta";
    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    ContaRepository contaRepository;

    @Test
    public void testCreateConta() {
        testRestTemplate.postForObject(URL_CONTA, null, String.class);
    }

    @Test
    public void testGetConta() {
        testRestTemplate.getForObject(URL_CONTA, String.class);
    }

    @Test
    public void testUpdateConta() {
        testRestTemplate.put(URL_CONTA, null, String.class);
    }

    @Test
    public void testDeleteConta() {
        testRestTemplate.delete(URL_CONTA, null, String.class);
    }


}
