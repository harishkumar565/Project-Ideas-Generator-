package org.example.proideas.Service;


import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.example.proideas.Entity.UserEntity;
import org.example.proideas.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    // Save User
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }

    // login User
    public UserEntity userLogin(UserEntity en){
        UserEntity existing = userRepository.findByEmail(en.getEmail());
        if(existing != null && en.getPassword().equals(existing.getPassword())){
            return existing;
        }
        return null;
    }

    // Get All Users
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    // Get User By Id
    public UserEntity getUserById(long id) {
        UserEntity exist=userRepository.findById(id).orElse(null);

        if (exist!=null) {
            return exist;
        } else {
            return null;
        }
    }

    // Update User
    public UserEntity updateUser(UserEntity user) {
        UserEntity exist=userRepository.findById(user.getId()).orElse(null);
        if(exist!=null) {
            exist.setUserName(user.getUserName());
            exist.setEmail(user.getEmail());
            exist.setPassword(user.getPassword());
            return userRepository.save(exist);
        }
        return null;
    }

    // Delete User
    public String deleteUser(long id) {
        userRepository.deleteById(id);
        return "User Deleted Successfully";
    }
}