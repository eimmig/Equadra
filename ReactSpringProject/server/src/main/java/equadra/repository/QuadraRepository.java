package equadra.repository;

import equadra.model.Quadra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuadraRepository extends JpaRepository<Quadra, Long>{
    Quadra findByNomeQuadra(String nomequadra);
    Optional<Quadra> findById(Long id);
}

//Select * from user where displayname LIKE '%Silva'
//List<User> findByDisplayNameEndingWith(String displayName);
