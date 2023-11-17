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
public class ItemVenda {
    protected int id;
    protected String nome;
    protected String imagem;
    protected String descricao;
    protected int quantidade;
    protected int valorItem;
    protected String observacao;
    protected int largura;
    protected int altura;
    protected String unidade;
    protected int valorM2;
    protected int valorEspessura;
    protected int valorFolha;
    protected int idVenda;
}
