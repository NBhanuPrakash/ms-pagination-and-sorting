package com.NNTeachie.dtos;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse<T> {
    int recordCount;
    T response;
}
