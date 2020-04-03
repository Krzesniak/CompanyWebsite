package pl.krzesniak.company.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.krzesniak.company.company.Company;

import java.util.List;

@Repository
@CrossOrigin("*")
public interface CompanyRepository extends JpaRepository<Company, Integer> {

}

