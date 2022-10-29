package equadra.repository;

import equadra.model.Quadra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuadraRepository extends JpaRepository<Quadra, String>{
    Quadra findByNome(String nomequadra);
}

//Select * from user where displayname LIKE '%Silva'
//List<User> findByDisplayNameEndingWith(String displayName);
