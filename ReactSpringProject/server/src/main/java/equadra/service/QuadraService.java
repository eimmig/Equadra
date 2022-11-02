package equadra.service;

import equadra.model.Quadra;
import equadra.repository.QuadraRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuadraService extends GenericCrudServiceImpl<Quadra, Long> {

    QuadraRepository quadraRepository;

    public QuadraService(QuadraRepository quadraRepository) {
        this.quadraRepository = quadraRepository;

    }

    @Override
    protected JpaRepository<Quadra, Long> getRepository() {
        return quadraRepository;
    }

    @Override
    public Quadra save(Quadra entity) {
        return super.save(entity);
    }

    public Optional<Quadra> getQuadra(long id) {
        Optional<Quadra> quadra = quadraRepository.findById(id);

        if(quadra.isPresent()){
            return quadra;
        }else{
            return null;
        }
    }

}