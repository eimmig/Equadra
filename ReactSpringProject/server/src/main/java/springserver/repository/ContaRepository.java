package springserver.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import springserver.model.Conta;
import springserver.model.User;

import java.util.List;

public interface ContaRepository extends JpaRepository<Conta, Long> {


    Conta findByIdAndUser(Long id, User user);

    List<Conta> findAllByUser(User user);

    List<Conta> findAllByUser(User user, Sort sort);

    Page<Conta> findAllByUser(User user, Pageable pageable);

}
