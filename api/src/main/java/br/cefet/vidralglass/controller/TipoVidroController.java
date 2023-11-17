/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.service.TipoVidroService;
import br.cefet.vidralglassbase.model.TipoVidro;
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
@RequestMapping("/api/v1/tipovidro")
public class TipoVidroController {
    private final TipoVidroService tipoVidroService;
    
    public TipoVidroController(TipoVidroService tipoVidroService){
        this.tipoVidroService = tipoVidroService;
    }
    
    @GetMapping({"/", ""})
    public List<TipoVidro> consultarTodos(){
        List<TipoVidro> TipoVidroList = tipoVidroService.consultarTodos();
        return TipoVidroList;
    }
    
    @GetMapping("/{id}")
    public TipoVidro consultarOrcamentoAcessorio(@PathVariable("id") int id){
        TipoVidro ret = tipoVidroService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public TipoVidro inserir(@RequestBody TipoVidro tipoVidro){
        TipoVidro ret = tipoVidroService.inserir(tipoVidro);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public TipoVidro alterar(@RequestBody TipoVidro tipoVidro){
        tipoVidroService.alterar(tipoVidro);
        return tipoVidro;
    }
    
    @DeleteMapping("/{id}")
    public TipoVidro deletar(@PathVariable("id") int id){
        TipoVidro tipoVidro = tipoVidroService.consultarPorId(id);
        if (tipoVidro == null){
            throw new RuntimeException("Nao existe vidro com este id para ser excluido....");
        }
        tipoVidroService.excluir(id);
        return tipoVidro;
}
}
