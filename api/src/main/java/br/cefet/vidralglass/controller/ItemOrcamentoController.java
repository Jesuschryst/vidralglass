package br.cefet.vidralglass.controller;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
import br.cefet.vidralglass.model.ItemOrcamento;
import br.cefet.vidralglass.service.ItemOrcamentoService;
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
@RequestMapping("/api/v1/itemorcamento")
public class ItemOrcamentoController {

    private final ItemOrcamentoService itemOrcamentoService;

    public ItemOrcamentoController(ItemOrcamentoService itemOrcamentoService) {
        this.itemOrcamentoService = itemOrcamentoService;
    }

    @GetMapping({"/", ""})
    public List<ItemOrcamento> consultarTodos() {
        List<ItemOrcamento> ItemOrcamentoList = itemOrcamentoService.consultarTodos();
        return ItemOrcamentoList;
    }

    @GetMapping({"/orcamento/listar/{id}"})
    public List<ItemOrcamento> consultarTodosByIdOrcamento(@PathVariable("id") int id) {
        List<ItemOrcamento> ItemOrcamentoList = itemOrcamentoService.consultarTodosPorIdOrcamento(id);
        return ItemOrcamentoList;
    }

    @GetMapping("/{id}")
    public ItemOrcamento consultarOrcamento(@PathVariable("id") int id) {
        ItemOrcamento ret = itemOrcamentoService.consultarPorId(id);
        return ret;
    }

    @GetMapping("/orcamento/{id}")
    public ItemOrcamento consultarOrcamentoByIdOrcamento(@PathVariable("id") int id) {
        ItemOrcamento ret = itemOrcamentoService.consultarPorIdOrcamento(id);
        return ret;
    }
    
    @GetMapping("/item/{id}")
    public ItemOrcamento consultarIdByIdOrcamento(@PathVariable("id") int id) {
        ItemOrcamento ret = itemOrcamentoService.consultarIdPorIdOrcamento(id);
        return ret;
    }

    @PostMapping({"", "/"})
    public ItemOrcamento inserir(@RequestBody ItemOrcamento itemOrcamento) {
        ItemOrcamento ret = itemOrcamentoService.inserir(itemOrcamento);
        return ret;
    }

    @PutMapping({"", "/"})
    public ItemOrcamento alterar(@RequestBody ItemOrcamento itemOrcamento) {
        itemOrcamentoService.alterar(itemOrcamento);
        return itemOrcamento;
    }

    @DeleteMapping("/{id}")
    public ItemOrcamento deletar(@PathVariable("id") int id) {
        ItemOrcamento itemOrcamento = itemOrcamentoService.consultarPorId(id);
        if (itemOrcamento == null) {
            throw new RuntimeException("Nao existe objeto com este id para ser excluido....");
        }
        itemOrcamentoService.excluir(id);
        return itemOrcamento;
    }

    @DeleteMapping("/orcamento/{id}")
    public ItemOrcamento deletarByIdOrcamento(@PathVariable("id") int id){
        ItemOrcamento itemOrcamento = itemOrcamentoService.consultarPorIdOrcamento(id);
        if (itemOrcamento == null){
            throw new RuntimeException("Nao existe objeto com este id para ser excluido....");
        }
        itemOrcamentoService.excluirPorIdOrcamento(id);
        return itemOrcamento;
}
    
}
