package org.example.proideas.Repository;

import org.example.proideas.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo extends JpaRepository<UserEntity, Long> {
    public UserEntity findByEmail(String email);
}
