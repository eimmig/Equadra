package springserver.contatests;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import springserver.repository.ContaRepository;

@DataJpaTest
@ActiveProfiles("test")
public class ContaRepositoryTest {

    @Autowired
    TestEntityManager testEntityManager;
    @Autowired
    ContaRepository contaRepository;


}
