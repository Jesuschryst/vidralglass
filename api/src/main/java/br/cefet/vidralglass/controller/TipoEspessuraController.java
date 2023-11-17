/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.model.TipoEspessura;
import br.cefet.vidralglass.service.TipoEspessuraService;
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
@RequestMapping("/api/v1/tipoespessura")
public class TipoEspessuraController {
    private final TipoEspessuraService tipoEspessuraService;
    
    public TipoEspessuraController(TipoEspessuraService tipoEspessuraService){
        this.tipoEspessuraService = tipoEspessuraService;
    }
    
    @GetMapping({"/", ""})
    public List<TipoEspessura> consultarTodos(){
        List<TipoEspessura> TipoEspessuraList = tipoEspessuraService.consultarTodos();
        return TipoEspessuraList;
    }
    
    @GetMapping("/{id}")
    public TipoEspessura consultarCliente(@PathVariable("id") int id){
        TipoEspessura ret = tipoEspessuraService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public TipoEspessura inserir(@RequestBody TipoEspessura tipoEspessura){
        TipoEspessura ret = tipoEspessuraService.inserir(tipoEspessura);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public TipoEspessura alterar(@RequestBody TipoEspessura tipoEspessura){
        tipoEspessuraService.alterar(tipoEspessura);
        return tipoEspessura;
    }
    
    @DeleteMapping("/{id}")
    public TipoEspessura deletar(@PathVariable("id") int id){
        TipoEspessura tipoEspessura = tipoEspessuraService.consultarPorId(id);
        if (tipoEspessura == null){
            throw new RuntimeException("Nao existe espessura com este id para ser excluido....");
        }
        tipoEspessuraService.excluir(id);
        return tipoEspessura;
}
}
