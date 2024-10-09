package br.com.dieco.Dieco.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dieco.Dieco.domain.user.User;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);

}
