
insert into user (username, password,displayname) values ('admin', '$2a$10$r7NbBQhJO0ajUL377HQV2.vpm/aYsr70x.aBAfLng0GRP3cG0kM5m', 'admin');
insert into user (username, password,displayname) values ('user', '$2a$10$beyIHcn39TB0Z2/7ylIC6eto4zsSkdh1lgpnqz6EM9GkKyEt7SwSK', 'user');
insert into user (username, password,displayname) values ('user1', '$2a$10$beyIHcn39TB0Z2/7ylIC6eto4zsSkdh1lgpnqz6EM9GkKyEt7SwSK', 'password');
insert into user (username, password,displayname) values ('user2', '$2a$10$beyIHcn39TB0Z2/7ylIC6eto4zsSkdh1lgpnqz6EM9GkKyEt7SwSK', 'password');

insert into conta (user_id, numero, agencia, banco, tipoconta) values (1, '123456789', '123', 'Itau', 'CC');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (2, '987654321', '123', 'Bradesco', 'CC');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (1, '123456789', '123', 'Itau', 'CP');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (2, '987654321', '123', 'Bradesco', 'CP');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (1, '123456789', '123', 'TESTE', 'CARTAO');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (1, '987654321', '123', 'Bradesco', 'CC');
insert into conta (user_id, numero, agencia, banco, tipoconta) values (3, '123456789', '123', 'Itau', 'CP');

insert into movimento (conta_id, valor, datavencimento, datapagamento, valorpago, categoria, descricao, movimentotipo,conta_destino_id) values (1, 150, '2020-01-01', '2020-01-01', 135, 'Alimentacao', 'Alimentacao', 'RECEITA',null);
insert into movimento (conta_id, valor, datavencimento, datapagamento, valorpago, categoria, descricao, movimentotipo,conta_destino_id) values (1, 100, '2020-01-01', '2020-01-01', 100, 'Transporte', 'Transporte', 'DESPESA',null);
