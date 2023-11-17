/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.service.VendaService;
import br.cefet.vidralglassbase.model.Venda;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author criad
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/venda")
public class VendaController {
    private final VendaService vendaService;
    
    public VendaController(VendaService vendaService){
        this.vendaService = vendaService;
    }
    
    @GetMapping({"/", ""})
    public List<Venda> consultarTodos(){
        List<Venda> VendaList = vendaService.consultarTodos();
        return VendaList;
    }
    
    @GetMapping("/{id}")
    public Venda consultarVenda(@PathVariable("id") int id){
        Venda ret = vendaService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Venda inserir(@RequestBody Venda Venda){
        Venda ret = vendaService.inserir(Venda);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Venda alterar(@RequestBody Venda Venda){
        vendaService.alterar(Venda);
        return Venda;
    }
    
    @DeleteMapping("/{id}")
    public Venda deletar(@PathVariable("id") int id){
        Venda Venda = vendaService.consultarPorId(id);
        if (Venda == null){
            throw new RuntimeException("Nao existe Venda com este id para ser excluido....");
        }
        vendaService.excluir(id);
        return Venda;
}
}
