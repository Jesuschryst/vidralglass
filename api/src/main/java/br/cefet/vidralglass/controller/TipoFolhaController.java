/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.service.TipoFolhaService;
import br.cefet.vidralglassbase.model.TipoFolha;
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
@RequestMapping("/api/v1/tipofolha")
public class TipoFolhaController {
  private final TipoFolhaService tipoFolhaService;
    
    public TipoFolhaController(TipoFolhaService tipoFolhaService){
        this.tipoFolhaService = tipoFolhaService;
    }
    
    @GetMapping({"/", ""})
    public List<TipoFolha> consultarTodos(){
        List<TipoFolha> TipoFolhaList = tipoFolhaService.consultarTodos();
        return TipoFolhaList;
    }
    
    @GetMapping("/{id}")
    public TipoFolha consultarOrcamentoAcessorio(@PathVariable("id") int id){
        TipoFolha ret = tipoFolhaService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public TipoFolha inserir(@RequestBody TipoFolha tipoFolha){
        TipoFolha ret = tipoFolhaService.inserir(tipoFolha);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public TipoFolha alterar(@RequestBody TipoFolha tipoFolha){
        tipoFolhaService.alterar(tipoFolha);
        return tipoFolha;
    }
    
    @DeleteMapping("/{id}")
    public TipoFolha deletar(@PathVariable("id") int id){
        TipoFolha tipoFolha = tipoFolhaService.consultarPorId(id);
        if (tipoFolha == null){
            throw new RuntimeException("Nao existe folha com este id para ser excluido....");
        }
        tipoFolhaService.excluir(id);
        return tipoFolha;
}
}
