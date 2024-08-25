package com.NNTeachie.service;

import com.NNTeachie.entity.Aadhar;
import com.NNTeachie.repository.AadharRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

@Service
public class AadharService {
    @Autowired
    private AadharRepo aadharRepo;

    public AadharService() {
    }

    public List<Aadhar> save(List<Aadhar> aadhar) {
        List<Aadhar> save = this.aadharRepo.saveAll(aadhar);
        return save;
    }

    public int all() {
        int count = (int)this.aadharRepo.count();
        return count;
    }

    public List<Aadhar> getAllProducts(int offset, int pagesize) {
        PageRequest pageRequest = PageRequest.of(offset, pagesize);
        return this.aadharRepo.findAll(pageRequest).stream().toList();
    }

    public List<Aadhar> getAllProductsSort(String filedName, int offSet, int pageSize) {
        PageRequest pageRequest = PageRequest.of(offSet, pageSize, Sort.by(Direction.ASC, new String[]{filedName}));
        return this.aadharRepo.findAll(pageRequest).stream().toList();
    }
}