package br.cefet.vidralglass.controller;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
import br.cefet.vidralglass.model.ItemOrcamentoAcessorio;
import br.cefet.vidralglass.service.ItemOrcamentoAcessorioService;
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
@RequestMapping("/api/v1/itemorcamentoacessorio")
public class ItemOrcamentoAcessorioController {

    private final ItemOrcamentoAcessorioService itemOrcamentoAcessorioService;

    public ItemOrcamentoAcessorioController(ItemOrcamentoAcessorioService itemOrcamentoAcessorioService) {
        this.itemOrcamentoAcessorioService = itemOrcamentoAcessorioService;
    }

    @GetMapping({"/", ""})
    public List<ItemOrcamentoAcessorio> consultarTodos() {
        List<ItemOrcamentoAcessorio> ItemOrcamentoAcessorioList = itemOrcamentoAcessorioService.consultarTodos();
        return ItemOrcamentoAcessorioList;
    }

    @GetMapping({"/listar/{id}"})
    public List<ItemOrcamentoAcessorio> consultarTodosPorIdItemOrcamento(@PathVariable("id") int id) {
        List<ItemOrcamentoAcessorio> ItemOrcamentoAcessorioList = itemOrcamentoAcessorioService.consultarTodosPorItemOrcamento(id);
        return ItemOrcamentoAcessorioList;
    }

    @GetMapping("/{id}")
    public ItemOrcamentoAcessorio consultarOrcamentoAcessorio(@PathVariable("id") int id) {
        ItemOrcamentoAcessorio ret = itemOrcamentoAcessorioService.consultarPorId(id);
        return ret;
    }
    
    @GetMapping("/buscar/{id}")
    public ItemOrcamentoAcessorio consultarOrcamentoAcessorioPorIdItem(@PathVariable("id") int id) {
        ItemOrcamentoAcessorio ret = itemOrcamentoAcessorioService.consultarPorIdItem(id);
        return ret;
    }
   
    @PostMapping({"", "/"})
    public ItemOrcamentoAcessorio inserir(@RequestBody ItemOrcamentoAcessorio itemOrcamentoAcessorio) {
        ItemOrcamentoAcessorio ret = itemOrcamentoAcessorioService.inserir(itemOrcamentoAcessorio);
        return ret;
    }

    @PutMapping({"", "/"})
    public ItemOrcamentoAcessorio alterar(@RequestBody ItemOrcamentoAcessorio itemOrcamentoAcessorio) {
        itemOrcamentoAcessorioService.alterar(itemOrcamentoAcessorio);
        return itemOrcamentoAcessorio;
    }

    @DeleteMapping("/{id}")
    public ItemOrcamentoAcessorio deletar(@PathVariable("id") int id) {
        ItemOrcamentoAcessorio itemOrcamentoAcessorio = itemOrcamentoAcessorioService.consultarPorId(id);
        if (itemOrcamentoAcessorio == null) {
            throw new RuntimeException("Nao existe objeto com este id para ser excluido....");
        }
        itemOrcamentoAcessorioService.excluir(id);
        return itemOrcamentoAcessorio;
    }
    
    
    @DeleteMapping("/itemorcamento/{id}")
    public ItemOrcamentoAcessorio deletarPorItemOrcamento(@PathVariable("id") int id){
        ItemOrcamentoAcessorio itemOrcamentoAcessorio = itemOrcamentoAcessorioService.consultarPorId(id);
        if (itemOrcamentoAcessorio == null){
            throw new RuntimeException("Nao existe objeto com este id para ser excluido....");
        }
        itemOrcamentoAcessorioService.excluirPorItemOrcamento(id);
        return itemOrcamentoAcessorio;
}
}
