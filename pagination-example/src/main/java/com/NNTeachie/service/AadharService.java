package com.NNTeachie.service;

import com.NNTeachie.entity.Aadhar;
import com.NNTeachie.repository.AadharRepo;

import java.util.List;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class AadharService {
    @Autowired
    private AadharRepo aadharRepo;

    public List<Aadhar> save(List<Aadhar> aadhar) {
        return aadharRepo.saveAll(aadhar);
    }

    public int all() {
        return Math.toIntExact(aadharRepo.count());
    }

    public List<Aadhar> getAllProducts(int offset, int pagesize) {
        PageRequest pageRequest = PageRequest.of(offset, pagesize);
        List<Aadhar> list = aadharRepo.findAll(pageRequest).stream().toList();
        log.info("response: {} ",list.toString());
        return list;
    }

    public List<Aadhar> getAllProductsSort(String filedName, int offSet, int pageSize) {
        PageRequest pageRequest = PageRequest.of(offSet, pageSize, Sort.by(Direction.ASC, filedName));
        List<Aadhar> list = aadharRepo.findAll(pageRequest).stream().toList();
        log.info("response with FieldName: {} ",list.toString());
        return list;
    }
}