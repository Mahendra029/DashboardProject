package com.db.www.controller;

import com.db.www.model.Item;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/items")
public class ItemController {
    private final List<Item> items = new ArrayList<>();

    @GetMapping
    public List<Item> getItems() {
        return items;
    }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        if (item.getText() != null && !item.getText().trim().isEmpty()) {
            items.add(item);
            System.out.println("Received from frontend value: " + item.getText());
        }
        return item;
    }
}
