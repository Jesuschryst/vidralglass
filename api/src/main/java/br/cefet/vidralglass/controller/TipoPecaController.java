/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.service.TipoPecaService;
import br.cefet.vidralglassbase.model.TipoPeca;
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
@RequestMapping("/api/v1/tipopeca")
public class TipoPecaController {
    private final TipoPecaService tipoPecaService;
    
    public TipoPecaController(TipoPecaService tipoPecaService){
        this.tipoPecaService = tipoPecaService;
    }
    
    @GetMapping({"/", ""})
    public List <TipoPeca> consultarTodos(){
        List <TipoPeca> TipoPecaList = tipoPecaService.consultarTodos();
        return TipoPecaList;
    }
    
    @GetMapping("/{id}")
    public TipoPeca consultarOrcamentoAcessorio(@PathVariable("id") int id){
        TipoPeca ret = tipoPecaService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public TipoPeca inserir(@RequestBody TipoPeca tipoPeca){
        TipoPeca ret = tipoPecaService.inserir(tipoPeca);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public TipoPeca alterar(@RequestBody TipoPeca tipoPeca){
        tipoPecaService.alterar(tipoPeca);
        return tipoPeca;
    }
    
    @DeleteMapping("/{id}")
    public TipoPeca deletar(@PathVariable("id") int id){
        TipoPeca tipoPeca = tipoPecaService.consultarPorId(id);
        if (tipoPeca == null){
            throw new RuntimeException("Nao existe peça com este id para ser excluido....");
        }
        tipoPecaService.excluir(id);
        return tipoPeca;
}
}
