package com.NNTeachie.repository;
import com.NNTeachie.entity.Aadhar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AadharRepo extends JpaRepository<Aadhar, String> {
    long count();
}
