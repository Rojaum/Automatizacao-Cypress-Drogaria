Feature: Validar Venda

    Como usuário desejo comprar 3 remedios Dipirona e adicionar eles no carrinho de compras e validar se o remedio foi realmente adicionado ao carrinho.

    Scenario: Realizar compra do remedio Dipirona e validar os remedios dentro do cesto de compras
        Given Que eu acesso ao site da drogaria Pague Menos para comprar de remedios
        And Pesquiso o remedio dipirona
        And Adiciono 3 remedios
        And Digito o CEP
        And Adiciono o dipirona no carrinho de compras
        And Clico na cestinha de compras
        And Clico em finalizar pedido
        Then Valido se o pedido retornou com sucesso