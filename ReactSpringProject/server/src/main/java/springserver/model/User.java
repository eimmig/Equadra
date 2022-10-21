package springserver.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import springserver.annotation.UniqueUsername;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.beans.Transient;
import java.util.Collection;

@Data
@Entity
// @Table(uniqueConstraints = @UniqueConstraint(columnNames = "username"))
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 4, max = 255, message = "O campo nome não pode ser vazio, e deve ter tamanho deve ser entre {min} e {max}")
    @UniqueUsername
    private String username;

    @NotNull
    @Size(min = 4, max = 255,message = "O campo usuario não pode ser vazio, O tamanho deve ser entre {min} e {max}")
    private String displayname;

    @NotNull
    @Size(min = 6, max = 255)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "A senha deve conter letras maiúsculas, minúsculas e números")
    private String password;


    @Override
    @Transient
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AuthorityUtils.createAuthorityList("ROLE_USER");
    }

    @Override
    @Transient
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @Transient
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isEnabled() {
        return true;
    }
}
