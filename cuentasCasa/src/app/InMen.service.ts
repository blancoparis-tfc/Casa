import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMen implements InMemoryDbService {
    createDb() {
        let categoria = [
            { id: '1', descripcion: 'Consumible' },
            { id: '2', descripcion: 'Comida' },
            { id: '3', descripcion: 'Ocio' },
            { id: '4', descripcion: 'Electronica' },
            { id: '5', descripcion: 'Informática' },
            { id: '6', descripcion: 'Papeleria' }
        ];
        let articulos = [
            { id: '1', nombre:'Leche entera', descripcion:'Cartones de leche',cantidad:'2',precio:'2',categorias:['Comida']},
            { id: '2', nombre:'Papel higinico', descripcion:'Papel de higienico, precio unidad',cantidad:'36',precio:'2',categorias:['Consumible']},
        ];
        let cuestionario = [
            { id: '1' , descripcion:' Examen', preguntas:[
                {
                    bloque:'1'
                    ,numero:'1'
                    ,enunciado:'¿Pregunta?'
                    ,anulada:'false'
                    ,opciones:[
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        
                    ]
                },
                {
                    bloque:'1'
                    ,numero:'2'
                    ,enunciado:'¿Pregunta 2?'
                    ,anulada:'false'
                    ,opciones:[
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        
                    ]
                },
                {
                    bloque:'1'
                    ,numero:'1'
                    ,enunciado:'¿Pregunta?'
                    ,anulada:'false'
                    ,opciones:[
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        
                    ]
                },
                {
                    bloque:'1'
                    ,numero:'2'
                    ,enunciado:'¿Pregunta 2?'
                    ,anulada:'false'
                    ,opciones:[
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        
                    ]
                }
            ]}
        ]
        return { categoria, articulos, cuestionario }
    }
}