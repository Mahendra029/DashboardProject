package com.db.www.model;

public class Item {
    private String text;

    public Item() {}

    public Item(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
