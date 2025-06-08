package com.NNTeachie.controller;

import com.NNTeachie.dtos.ApiResponse;
import com.NNTeachie.entity.Aadhar;
import com.NNTeachie.service.AadharService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping({"/aadhar"})
@CrossOrigin
@Log4j2
public class AadharController {
    private static final URI AADHAR_RESOURCE_URI = URI.create("http://localhost:5173/aadhar");

    @Autowired
    private AadharService aadharService;


    @PostMapping
    public ResponseEntity<List<Aadhar>> save(@RequestBody List<Aadhar> aadhar) {
        log.info("Request data: {}",aadhar.toString());
        return ResponseEntity.created(AADHAR_RESOURCE_URI).body(aadharService.save(aadhar));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Aadhar>>> getAll(@RequestParam(required = false, defaultValue = "0") Integer offSet, @RequestParam(required = false, defaultValue = "10") Integer pageSize) {
        List<Aadhar> save = aadharService.getAllProducts(offSet, pageSize);
        ApiResponse<List<Aadhar>> listApiResponse = new ApiResponse<>(aadharService.all(), save);
        log.info("/aadhars endpoint");
        return ResponseEntity.ok(listApiResponse) ;
    }

    @GetMapping({"/{fieldName}"})
    public ApiResponse<List<Aadhar>> getAll(@PathVariable(required = false) String fieldName,@RequestParam(required = false, defaultValue = "0") Integer offSet, @RequestParam(required = false, defaultValue = "10") Integer pageSize) {
        List<Aadhar> save = aadharService.getAllProductsSort(fieldName, offSet, pageSize);
        return new ApiResponse<>(aadharService.all(), save);
    }
}