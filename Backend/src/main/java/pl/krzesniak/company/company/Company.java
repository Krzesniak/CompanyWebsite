package pl.krzesniak.company.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="companies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "branch")
    private String branch;

    @Column(name = "description")
    private String description;

    @Column(name = "email")
    private String email;

    @Column(name ="city")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "mobile")
    private String mobilePhone;


}
