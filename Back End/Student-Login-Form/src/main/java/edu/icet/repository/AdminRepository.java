package edu.icet.repository;

import edu.icet.dao.AdminEntity;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<AdminEntity,Long> {
}
