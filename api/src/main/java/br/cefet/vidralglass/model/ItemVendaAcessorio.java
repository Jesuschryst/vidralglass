/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

/**
 *
 * @author criad
 */
@Data
@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class ItemOrcamentoAcessorio {
    protected int idItemOrcamentoAcessorio;
    protected int valor;
    protected int quantidade;
    protected int idItemOrcamento;
    protected int idAcessorio;
    protected int valorTotal;
}
