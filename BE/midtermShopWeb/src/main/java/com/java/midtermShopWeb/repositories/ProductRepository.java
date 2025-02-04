package com.java.midtermShopWeb.repositories;


import com.java.midtermShopWeb.models.Category;
import com.java.midtermShopWeb.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String name);
    Page<Product> findAll(Pageable pageable);
    List<Product> findByCategory(Category category);
    @Query("SELECT p FROM Product p WHERE " +
            "(:categoryId IS NULL OR :categoryId = 0 OR p.category.id = :categoryId) " +
            "AND (:keyword IS NULL OR :keyword = '' OR p.name LIKE %:keyword% " +
            "OR p.description LIKE %:keyword%)"+"  AND p.price >= :priceFrom AND p.price <= :priceTo ")
    Page<Product> searchProductsByConditions
            (@Param("categoryId") Long categoryId,
             @Param("keyword") String keyword, Double priceFrom, Double priceTo , Pageable pageable);

    Page<Product> findAll(Specification<Product> spec, Pageable pageable);
    @Query("SELECT p FROM Product p LEFT JOIN FETCH p.productImages WHERE p.id = :productId")
    Optional<Product> getDetailProduct(@Param("productId") Long productId);
    List<Product> findAllByIdIn(List<Long> ids);
    List<Product> deleteAllByIdIn(List<Long> ids);
}
