/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.model.ItemVenda;
import br.cefet.vidralglass.service.ItemVendaService;
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
@RequestMapping("/api/v1/itemvenda")
public class ItemVendaController {
    private final ItemVendaService itemVendaService;
    
    public ItemVendaController(ItemVendaService itemVendaService){
        this.itemVendaService = itemVendaService;
    }
    
    @GetMapping({"/", ""})
    public List<ItemVenda> consultarTodos(){
        List<ItemVenda> ItemVendaList = itemVendaService.consultarTodos();
        return ItemVendaList;
    }
    
    @GetMapping("/{id}")
    public ItemVenda consultarCliente(@PathVariable("id") int id){
        ItemVenda ret = itemVendaService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public ItemVenda inserir(@RequestBody ItemVenda itemVenda){
        ItemVenda ret = itemVendaService.inserir(itemVenda);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public ItemVenda alterar(@RequestBody ItemVenda itemVenda){
        itemVendaService.alterar(itemVenda);
        return itemVenda;
    }
    
    @DeleteMapping("/{id}")
    public ItemVenda deletar(@PathVariable("id") int id){
        ItemVenda itemVenda = itemVendaService.consultarPorId(id);
        if (itemVenda == null){
            throw new RuntimeException("Nao existe item com este id para ser excluido....");
        }
        itemVendaService.excluir(id);
        return itemVenda;
}
}
