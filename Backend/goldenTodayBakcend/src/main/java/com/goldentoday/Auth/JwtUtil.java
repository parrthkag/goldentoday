package com.goldentoday.Auth;


import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;

import java.util.Date;

@Component
public class JwtUtil {
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);
    private final long EXPIRATION = 1000 * 60 * 60; // 1 hour

    public String generateToken(String email) {
        return io.jsonwebtoken.Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(SECRET_KEY)
                .compact();
    }

    public String extractEmail(String token) {
        return io.jsonwebtoken.Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token) {
        try {
            io.jsonwebtoken.Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
