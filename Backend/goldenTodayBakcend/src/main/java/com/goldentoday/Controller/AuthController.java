package com.goldentoday.Controller;

import com.goldentoday.Auth.JwtUtil;
import com.goldentoday.Reposirotry.UserRepository;
import com.goldentoday.modal.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<TokenResponse> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest()
                    .body(new TokenResponse("Email already exists!"));
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok(new TokenResponse("User Registered Successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody User loginRequest) {
        return userRepository.findByEmail(loginRequest.getEmail())
                .filter(u -> passwordEncoder.matches(loginRequest.getPassword(), u.getPassword()))
                .map(u -> ResponseEntity.ok(
                        new TokenResponse(jwtUtil.generateToken(u.getEmail()))
                ))
                .orElse(ResponseEntity.status(401)
                        .body(new TokenResponse("Invalid Credentials")));
    }

    @GetMapping("/profile")
    public ResponseEntity<TokenResponse> profile(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        if (jwtUtil.validateToken(token)) {
            String email = jwtUtil.extractEmail(token);
            return ResponseEntity.ok(new TokenResponse("Profile for: " + email));
        }
        return ResponseEntity.status(401).body(new TokenResponse("Invalid Token"));
    }

    // Response DTO for both success and error
    public record TokenResponse(String token) {}
}
