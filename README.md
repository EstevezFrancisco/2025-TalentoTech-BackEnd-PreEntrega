# 2025-TalentoTech-BackEnd-PreEntrega

## Descripción

Herramienta de línea de comandos para gestionar productos. Utiliza una API de FakeStore.

## Uso
```
npm start <method> <resource> [params]
```

### Comandos
#### Obtener todos los productos:
```
npm start GET products
```

#### Obtener un producto específico:
```
npm start GET products/<id>
```

#### Crear un producto nuevo:
```
npm start POST products <titulo> <precio> <categoria>
```

#### Eliminar un producto:
```
npm start DELETE products/<id>
```
