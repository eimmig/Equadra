package equadra.service;

import equadra.model.Quadra;
import equadra.repository.QuadraRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class QuadraService extends GenericCrudServiceImpl<Quadra, String> {

    QuadraRepository quadraRepository;

    public QuadraService(QuadraRepository quadraRepository) {
        this.quadraRepository = quadraRepository;

    }

    @Override
    protected JpaRepository<Quadra, String> getRepository() {
        return quadraRepository;
    }

    @Override
    public Quadra save(Quadra entity) {
        return super.save(entity);
    }

}