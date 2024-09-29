package com.NNTeachie.controller;

import com.NNTeachie.dtos.ApiResponse;
import com.NNTeachie.entity.Aadhar;
import com.NNTeachie.service.AadharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/aadhar"})
@CrossOrigin
public class AadharController {
    @Autowired
    private AadharService aadharService;


    @PostMapping
    public List<Aadhar> save(@RequestBody List<Aadhar> aadhar) {
        List<Aadhar> save = aadharService.save(aadhar);
        return save;
    }

    @GetMapping
    public ApiResponse<List<Aadhar>> getAll(@RequestParam int offSet, @RequestParam int pageSize) {
        List<Aadhar> save = aadharService.getAllProducts(offSet, pageSize);
        return new ApiResponse<>(aadharService.all(), save);
    }

    @GetMapping({"/{fieldName}"})
    public ApiResponse<List<Aadhar>> getAll(@PathVariable String fieldName, @RequestParam int offSet, @RequestParam int pageSize) {
        List<Aadhar> save = aadharService.getAllProductsSort(fieldName, offSet, pageSize);
        return new ApiResponse<>(aadharService.all(), save);
    }
}