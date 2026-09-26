package org.example.proideas.Controller;

import java.util.List;

import org.example.proideas.Entity.UserEntity;
import org.example.proideas.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    private UserService userService;

    // Create User
    @PostMapping("/save")
    public UserEntity saveUser(@RequestBody UserEntity user) {
        return userService.saveUser(user);
    }

    // Login User
    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody UserEntity user) {

        UserEntity existingUser = userService.userLogin(user);

        if (existingUser != null) {
            return ResponseEntity.ok(existingUser);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid email or password");
    }

    // Get All Users
    @GetMapping("/getall")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get User By Id
    @GetMapping("/getone/{id}")
    public UserEntity getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    // Update User
    @PutMapping("/edit")
    public UserEntity updateUser(@RequestBody UserEntity user) {
        return userService.updateUser(user);
    }

    // Delete User
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable long id) {
        return userService.deleteUser(id);
    }
}
