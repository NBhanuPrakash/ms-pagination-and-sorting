package com.NNTeachie.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "aadhar_details")
public class Aadhar {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private String id;
    private String personName;
    private long aadharId;
    private String gender;
}
