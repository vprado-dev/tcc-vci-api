"use strict";
const questions = [
    {
        json_question: {
            enunciado:
                "Seu produto/serviço deve procurar sempre atender as necessidades do:",
            respostas: {
                q1: { pergunta: "Gestor da produção", certa: false },
                q2: { pergunta: "Cliente", certa: true },
                q3: { pergunta: "Líder da produção", certa: false },
                q4: { pergunta: "Dono da empresa", certa: false }
            },
            key: "01"
        }
    },
    {
        json_question: {
            enunciado: "É considerado um tipo de capacitação:",
            respostas: {
                q1: { pergunta: "Curso", certa: true },
                q2: { pergunta: "Produção de um pedido", certa: false },
                q3: { pergunta: "Prestação de um serviço", certa: false },
                q4: { pergunta: "Manutenção de equipe", certa: false }
            },
            key: "02"
        }
    },
    {
        json_question: {
            enunciado: "Em quais locais podemos encontrar a PQ:",
            respostas: {
                q1: { pergunta: "Quadros de aviso / placas", certa: false },
                q2: { pergunta: "Quadros de aviso / site", certa: true },
                q3: { pergunta: "Quadros de aviso / email", certa: false },
                q4: { pergunta: "Email / site", certa: false }
            },
            key: "03"
        }
    },
    {
        json_question: {
            enunciado: "A premissa da PQ é baseada no:",
            respostas: {
                q1: {
                    pergunta:
                        "Compromisso da empresa com as partes interessadas",
                    certa: true
                },
                q2: {
                    pergunta: "Compromisso da empresa com os clientes",
                    certa: false
                },
                q3: {
                    pergunta: "Compromisso das partes interessadas com todos",
                    certa: false
                },
                q4: {
                    pergunta: "Compromisso da empresa com os colaboradores",
                    certa: false
                }
            },
            key: "04"
        }
    },
    {
        json_question: {
            enunciado:
                "As 4 partes que a Política da Qualidade deve atender são:",
            respostas: {
                q1: {
                    pergunta:
                        "Satisfação do cliente/ requisitos aplicáveis/ treinamento / melhoria contínua",
                    certa: false
                },
                q2: {
                    pergunta:
                        "Satisfação do cliente/ requisitos clientes/ treinamento / melhoria contínua",
                    certa: false
                },
                q3: {
                    pergunta:
                        "Satisfação do cliente/ requisitos clientes/ capacitação / melhoria contínua",
                    certa: false
                },
                q4: {
                    pergunta:
                        "Satisfação do cliente/ requisitos aplicáveis/ capacitação / melhoria contínua",
                    certa: true
                }
            },
            key: "05"
        }
    },
    {
        json_question: {
            enunciado:
                "A Política da Qualidade da VCI Brasil é ___________ atender às necessidades dos seus clientes e dos requisitos aplicáveis, atuando no mercado de: materiais para embalagens, contendo ou não inibidores voláteis de corrosão, fluidos industriais, resinas, solventes e soluções anticorrosivas, através da capacitação de seus colaboradores e da melhoria contínua dos seus processos.",
            respostas: {
                q1: { pergunta: "Procurar ", certa: true },
                q2: { pergunta: "Sempre", certa: false },
                q3: { pergunta: "Tentar ", certa: false },
                q4: { pergunta: "Obrigatoriamente", certa: false }
            },
            key: "06"
        }
    },
    {
        json_question: {
            enunciado: "São consideradas partes interessadas na PQ:",
            respostas: {
                q1: {
                    pergunta: "Somente elementos que afetam a organização",
                    certa: false
                },
                q2: {
                    pergunta:
                        "Somente elementos que são afetados pela organização",
                    certa: false
                },
                q3: {
                    pergunta:
                        "Todos elementos que afetam e são afetados pela organização",
                    certa: true
                },
                q4: {
                    pergunta:
                        "Todos elementos que não afetam mas são afetados pela organização",
                    certa: false
                }
            },
            key: "07"
        }
    },
    {
        json_question: {
            enunciado: "É considerada como uma melhoría contínua dentro da PQ:",
            respostas: {
                q1: { pergunta: "Cursos", certa: false },
                q2: { pergunta: "Manutenções corretivas", certa: false },
                q3: { pergunta: "Ações corretivas", certa: true },
                q4: { pergunta: "Manutenções preventivas", certa: false }
            },
            key: "08"
        }
    },
    {
        json_question: {
            enunciado: "Não é considerada uma melhoria contínua dentro da PQ:",
            respostas: {
                q1: {
                    pergunta: "Investimento em equipamentos",
                    certa: false
                },
                q2: { pergunta: "Ações corretivas", certa: false },
                q3: {
                    pergunta: "Desenvolvimento de novos produtos",
                    certa: false
                },
                q4: { pergunta: "Treinamentos", certa: true }
            },
            key: "09"
        }
    },
    {
        json_question: {
            enunciado: "A política da qualidade da VCI Brasil visa capacitar:",
            respostas: {
                q1: { pergunta: "Clientes ", certa: false },
                q2: { pergunta: "Colaboradores", certa: true },
                q3: { pergunta: "Clientes externos ", certa: false },
                q4: { pergunta: "Provedores externos", certa: false }
            },
            key: "10"
        }
    },
    {
        json_question: {
            enunciado: "Os requisitos aplicáveis podem ser entendidos como:",
            respostas: {
                q1: {
                    pergunta:
                        "Condições básicas que devem ser colocadas em prática pela organização",
                    certa: true
                },
                q2: {
                    pergunta:
                        "Compromisso da empresa com as partes interessadas",
                    certa: false
                },
                q3: {
                    pergunta:
                        "Pessoas/intituições/grupos/orgãos governamentais/etc...",
                    certa: false
                },
                q4: {
                    pergunta: "Capacitação dos colaboradores",
                    certa: false
                }
            },
            key: "11"
        }
    },
    {
        json_question: {
            enunciado: "A VCI Brasil atua no mercado de:",
            respostas: {
                q1: {
                    pergunta:
                        "Embalagens contendo ou não inibidores voláteis de corrosão...",
                    certa: true
                },
                q2: { pergunta: "Insumos anticorrosivos...", certa: false },
                q3: {
                    pergunta: "Sprays e óleos anticorrosão...",
                    certa: false
                },
                q4: {
                    pergunta: "Embalagens contendo inibidores de corrosão",
                    certa: false
                }
            },
            key: "12"
        }
    },
    {
        json_question: {
            enunciado: "Não faz parte da Política da Qualidade da VCI Brasil:",
            respostas: {
                q1: {
                    pergunta: "Capacitação dos colaboradores",
                    certa: false
                },
                q2: { pergunta: "Melhoria contínua", certa: false },
                q3: { pergunta: "Capacitação contínua", certa: true },
                q4: {
                    pergunta:
                        "Procurar atender as necessidades de seus clientes",
                    certa: false
                }
            },
            key: "13"
        }
    },
    {
        json_question: {
            enunciado:
                "Qual a parte interessada mais importante da Política da Qualidade:",
            respostas: {
                q1: { pergunta: "Cliente ", certa: true },
                q2: { pergunta: "Colaboradores ", certa: false },
                q3: { pergunta: "Clientes externos ", certa: false },
                q4: { pergunta: "Provedores externos", certa: false }
            },
            key: "14"
        }
    },
    {
        json_question: {
            enunciado: "Não é considerado um requisito aplicável dentro da PQ:",
            respostas: {
                q1: { pergunta: "Ações corretivas ", certa: true },
                q2: { pergunta: "Descrição de cargo ", certa: false },
                q3: { pergunta: "Licenças ", certa: false },
                q4: { pergunta: "Normas de conduta", certa: false }
            },
            key: "15"
        }
    },
    {
        json_question: {
            enunciado:
                "A capacitação consiste na atualização, complementação e/ou aplicação das:",
            respostas: {
                q1: { pergunta: "Competências ou habilidades", certa: true },
                q2: {
                    pergunta: "Competências ou capacitação",
                    certa: false
                },
                q3: {
                    pergunta: "Necessidades ou habilidades",
                    certa: false
                },
                q4: { pergunta: "Necessidades ou capacitação", certa: false }
            },
            key: "16"
        }
    },
    {
        json_question: {
            enunciado:
                "A PQ da VCI Brasil procura atender as necessidades dos:",
            respostas: {
                q1: { pergunta: "Clientes externos", certa: false },
                q2: { pergunta: "Clientes internos", certa: false },
                q3: {
                    pergunta: "Clientes internos e externos",
                    certa: false
                },
                q4: { pergunta: "Clientes", certa: true }
            },
            key: "17"
        }
    },
    {
        json_question: {
            enunciado: "A política da qualidade deve ser:",
            respostas: {
                q1: { pergunta: "Decorada ", certa: false },
                q2: { pergunta: "Gravada ", certa: false },
                q3: { pergunta: "Copiada ", certa: false },
                q4: { pergunta: "Entendida", certa: true }
            },
            key: "18"
        }
    },
    {
        json_question: {
            enunciado:
                "Pode ser considerada uma forma de capacitação dentro do SGQ:",
            respostas: {
                q1: { pergunta: "Treinamento para cliente", certa: false },
                q2: {
                    pergunta: "Palestras e workshops para clientes",
                    certa: false
                },
                q3: { pergunta: "Palestras internas", certa: true },
                q4: {
                    pergunta: "Treinamentos para provedores externos",
                    certa: false
                }
            },
            key: "19"
        }
    },
    {
        json_question: {
            enunciado: "Não é considerado um requisito aplicável:",
            respostas: {
                q1: { pergunta: "Descrição de função", certa: true },
                q2: { pergunta: "Pedido de venda", certa: false },
                q3: { pergunta: "Pedido de compra", certa: false },
                q4: { pergunta: "Ordem de produção", certa: false }
            },
            key: "20"
        }
    }
];
const quiz = questions.map((value, index) => {
    let reg = {
        json_question: JSON.stringify(value.json_question),
        points: 20,
        created_at: new Date(),
        updated_at: new Date()
    };
    return reg;
});
console.log(quiz[15]);
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert("quiz", quiz, {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete("quiz", null, {});
    }
};
