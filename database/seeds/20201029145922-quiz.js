"use strict";
const questions = [
    {
        json_question: {
            enunciado:
                "Seu produto/serviço deve procurar sempre atender as necessidades do:",
            respostas: {
                q1: { pergunta: "gestor da produção", certa: "false" },
                q2: { pergunta: "cliente", certa: "true" },
                q3: { pergunta: "líder da produção", certa: "false" },
                q4: { pergunta: "dono da empresa", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "É considerado um tipo de capacitação:",
            respostas: {
                q1: { pergunta: "curso", certa: "true" },
                q2: { pergunta: "produção de um pedido", certa: "false" },
                q3: { pergunta: "prestação de um serviço", certa: "false" },
                q4: { pergunta: "manutenção de equipe", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "Em quais locais podemos encontrar a PQ:",
            respostas: {
                q1: { pergunta: "quadros de aviso / placas", certa: "false" },
                q2: { pergunta: "quadros de aviso / site", certa: "true" },
                q3: { pergunta: "quadros de aviso / email", certa: "false" },
                q4: { pergunta: "email / site", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "A premissa da PQ é baseada no:",
            respostas: {
                q1: {
                    pergunta:
                        "compromisso da empresa com as partes interessadas",
                    certa: "true"
                },
                q2: {
                    pergunta: "compromisso da empresa com os clientes",
                    certa: "false"
                },
                q3: {
                    pergunta: "compromisso das partes interessadas com todos",
                    certa: "false"
                },
                q4: {
                    pergunta: "compromisso da empresa com os colaboradores",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "As 4 partes que a Política da Qualidade deve atender são:",
            respostas: {
                q1: {
                    pergunta:
                        "satisfação do cliente/ requisitos aplicáveis/ treinamento / melhoria contínua",
                    certa: "false"
                },
                q2: {
                    pergunta:
                        "satisfação do cliente/ requisitos clientes/ treinamento / melhoria contínua",
                    certa: "false"
                },
                q3: {
                    pergunta:
                        "satisfação do cliente/ requisitos clientes/ capacitação / melhoria contínua",
                    certa: "false"
                },
                q4: {
                    pergunta:
                        "satisfação do cliente/ requisitos aplicáveis/ capacitação / melhoria contínua",
                    certa: "true"
                }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "A Política da Qualidade da VCI Brasil é ___________ atender às necessidades dos seus clientes e dos requisitos aplicáveis, atuando no mercado de: materiais para embalagens, contendo ou não inibidores voláteis de corrosão, fluidos industriais, resinas, solventes e soluções anticorrosivas, através da capacitação de seus colaboradores e da melhoria contínua dos seus processos.",
            respostas: {
                q1: { pergunta: "procurar ", certa: "true" },
                q2: { pergunta: "sempre", certa: "false" },
                q3: { pergunta: "tentar ", certa: "false" },
                q4: { pergunta: "obrigatoriamente", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "São consideradas partes interessadas na PQ:",
            respostas: {
                q1: {
                    pergunta: "somente elementos que afetam a organização",
                    certa: "false"
                },
                q2: {
                    pergunta:
                        "somente elementos que são afetados pela organização",
                    certa: "false"
                },
                q3: {
                    pergunta:
                        "todos elementos que afetam e são afetados pela organização",
                    certa: "true"
                },
                q4: {
                    pergunta:
                        "todos elementos que não afetam mas são afetados pela organização",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado: "É considerada como uma melhoría contínua dentro da PQ:",
            respostas: {
                q1: { pergunta: "cursos", certa: "false" },
                q2: { pergunta: "manutenções corretivas", certa: "false" },
                q3: { pergunta: "ações corretivas", certa: "true" },
                q4: { pergunta: "manutenções preventivas", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "Não é considerada uma melhoria contínua dentro da PQ:",
            respostas: {
                q1: {
                    pergunta: "investimento em equipamentos",
                    certa: "false"
                },
                q2: { pergunta: "ações corretivas", certa: "false" },
                q3: {
                    pergunta: "desenvolvimento de novos produtos",
                    certa: "false"
                },
                q4: { pergunta: "treinamentos", certa: "true" }
            }
        }
    },
    {
        json_question: {
            enunciado: "A política da qualidade da VCI Brasil visa capacitar:",
            respostas: {
                q1: { pergunta: "clientes ", certa: "false" },
                q2: { pergunta: "colaboradores", certa: "true" },
                q3: { pergunta: "clientes externos ", certa: "false" },
                q4: { pergunta: "provedores externos", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "Os requisitos aplicáveis podem ser entendidos como:",
            respostas: {
                q1: {
                    pergunta:
                        "condições básicas que devem ser colocadas em prática pela organização",
                    certa: "true"
                },
                q2: {
                    pergunta:
                        "compromisso da empresa com as partes interessadas",
                    certa: "false"
                },
                q3: {
                    pergunta:
                        "pessoas/intituições/grupos/orgãos governamentais/etc...",
                    certa: "false"
                },
                q4: {
                    pergunta: "capacitação dos colaboradores",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado: "A VCI Brasil atua no mercado de:",
            respostas: {
                q1: {
                    pergunta:
                        "embalagens contendo ou não inibidores voláteis de corrosão...",
                    certa: "true"
                },
                q2: { pergunta: "insumos anticorrosivos...", certa: "false" },
                q3: {
                    pergunta: "sprays e óleos anticorrosão...",
                    certa: "false"
                },
                q4: {
                    pergunta: "embalagens contendo inibidores de corrosão",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado: "Não faz parte da Política da Qualidade da VCI Brasil:",
            respostas: {
                q1: {
                    pergunta: "capacitação dos colaboradores",
                    certa: "false"
                },
                q2: { pergunta: "melhoria contínua", certa: "false" },
                q3: { pergunta: "capacitação contínua", certa: "true" },
                q4: {
                    pergunta:
                        "procurar atender as necessidades de seus clientes",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "Qual a parte interessada mais importante da Política da Qualidade:",
            respostas: {
                q1: { pergunta: "cliente ", certa: "true" },
                q2: { pergunta: "colaboradores ", certa: "false" },
                q3: { pergunta: "clientes externos ", certa: "false" },
                q4: { pergunta: "provedores externos", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado: "Não é considerado um requisito aplicável dentro da PQ:",
            respostas: {
                q1: { pergunta: "ações corretivas ", certa: "true" },
                q2: { pergunta: "descrição de cargo ", certa: "false" },
                q3: { pergunta: "licenças ", certa: "false" },
                q4: { pergunta: "normas de conduta", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "A capacitação consiste na atualização, complementação e/ou aplicação das:",
            respostas: {
                q1: { pergunta: "competências ou habilidades", certa: "true" },
                q2: {
                    pergunta: "competências ou capacitação",
                    certa: "false"
                },
                q3: {
                    pergunta: "necessidades ou habilidades",
                    certa: "false"
                },
                q4: { pergunta: "necessidades ou capacitação", certa: "false" }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "A PQ da VCI Brasil procura atender as necessidades dos:",
            respostas: {
                q1: { pergunta: "clientes externos", certa: "false" },
                q2: { pergunta: "clientes internos", certa: "false" },
                q3: {
                    pergunta: "clientes internos e externos",
                    certa: "false"
                },
                q4: { pergunta: "clientes", certa: "true" }
            }
        }
    },
    {
        json_question: {
            enunciado: "A política da qualidade deve ser:",
            respostas: {
                q1: { pergunta: "decorada ", certa: "false" },
                q2: { pergunta: "gravada ", certa: "false" },
                q3: { pergunta: "copiada ", certa: "false" },
                q4: { pergunta: "entendida", certa: "true" }
            }
        }
    },
    {
        json_question: {
            enunciado:
                "Pode ser considerada uma forma de capacitação dentro do SGQ:",
            respostas: {
                q1: { pergunta: "treinamento para cliente", certa: "false" },
                q2: {
                    pergunta: "palestras e workshops para clientes",
                    certa: "false"
                },
                q3: { pergunta: "palestras internas", certa: "true" },
                q4: {
                    pergunta: "treinamentos para provedores externos",
                    certa: "false"
                }
            }
        }
    },
    {
        json_question: {
            enunciado: "Não é considerado um requisito aplicável:",
            respostas: {
                q1: { pergunta: "descrição de função", certa: "true" },
                q2: { pergunta: "pedido de venda", certa: "false" },
                q3: { pergunta: "pedido de compra", certa: "false" },
                q4: { pergunta: "ordem de produção", certa: "false" }
            }
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
