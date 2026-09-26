//package org.example.proideas.Service;
//
//
//import java.util.List;
//import java.util.Optional;
//
//import org.apache.catalina.User;
//import org.example.proideas.Entity.UserEntity;
//import org.example.proideas.Repository.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepo userRepository;
//
//    // Save User
//    public UserEntity saveUser(User user) {
//        return userRepository.save(user);
//    }
//
//    // Get All Users
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    // Get User By Id
//    public User getUserById(int id) {
//        Optional<User> optional = userRepository.findById(id);
//
//        if (optional.isPresent()) {
//            return optional.get();
//        } else {
//            return null;
//        }
//    }
//
//    // Update User
//    public User updateUser(User user) {
//        return userRepository.save(user);
//    }
//
//    // Delete User
//    public String deleteUser(int id) {
//        userRepository.deleteById(id);
//        return "User Deleted Successfully";
//    }
//}